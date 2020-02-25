import React from 'react'
import { OpenWebApp } from 'near-openweb-js'
import PropTypes from 'prop-types'

const propTypes = {
  accountId: PropTypes.string.isRequired,
  defaultProfileUrl: PropTypes.string,
  displayName: PropTypes.string,
  profileUrl: PropTypes.string,
  bio: PropTypes.string,
  onFetch: PropTypes.func,
  forceShow: PropTypes.bool
}

const defaultProps = {
  defaultProfileUrl: null,
  styles: {
    profile: {
      whiteSpace: 'nowrap',
      display: 'inline-block',
    },
    profileImage: {
      height: '3em',
      width: '3em',
      borderRadius: '50%',
      verticalAlign: 'middle'
    },
    profileName: {
      overflowY: 'hidden',
      marginLeft: '0.5em',
      verticalAlign: 'middle',
    },
    profileDisplayName: {},
    profileAccountId: {
      color: '#999',
    },
  },
};

const profileAppId = 'profile'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      profileUrl: null,
      bio: '',
      loading: false,
      found: false
    }
    const nearConfig = this.props.nearConfig || window.nearConfig || {
      networkId: 'default',
      nodeUrl: 'https://rpc.nearprotocol.com',
      walletUrl: 'https://wallet.nearprotocol.com',
    };

    if (!window.profileComponentCache) {
      window.profileComponentCache = {
        profileCache: {},
        app: new OpenWebApp(profileAppId, null, nearConfig),
      };
      window.profileComponentCache.app.init();
    }

    this.profileCache = window.profileComponentCache.profileCache;
    this.app = window.profileComponentCache.app;
  }

  componentDidMount() {
    this.props.accountId && this.app.init().then(() => this.updateProfile(this.props.accountId));
  }

  async fetchProfile(accountId) {
    if (accountId in this.profileCache) {
      return await this.profileCache[accountId];
    } else {
      console.log("Fetching profile for " + accountId);
      this.profileCache[accountId] = Promise.all([
        this.app.getFrom(accountId, 'displayName'),
        this.app.getFrom(accountId, 'profileUrl'),
        this.app.getFrom(accountId, 'bio'),
      ]).then((values) => {
        return {
          accountId,
          displayName: values[0] || "",
          profileUrl: values[1],
          bio: values[2] || "",
        };
      }).catch((e) => false);
      return await this.profileCache[accountId];
    }
  }

  updateProfile(accountId) {
    this.setState({
      displayName: "",
      profileUrl: null,
      bio: "",
      loading: true,
      found: false,
    });
    this.fetchProfile(this.props.accountId).then((profile) => {
      if (profile) {
        this.setState({
          displayName: profile.displayName,
          profileUrl: profile.profileUrl,
          bio: profile.bio,
          loading: false,
          found: true,
        });
      } else {
        this.setState({
          loading: false,
          found: false,
        });
      }
      this.props.onFetch && this.props.onFetch(profile);
    })

  }

  componentDidUpdate(prevProps) {
    if (this.props.accountId !== prevProps.accountId) {
      this.updateProfile(this.props.accountId);
    }
  }

  render() {
    const displayName = this.props.displayName || this.state.displayName;
    const profileUrl = this.props.profileUrl || this.state.profileUrl || this.props.defaultProfileUrl;
    const bio = this.props.bio || this.state.bio;
    const accountId = this.props.accountId;
    const styles = this.props.styles;

    return this.state.loading ? (
      <div style={styles.profile}>
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : this.state.found || this.props.forceShow ? (
        <div style={styles.profile} title={bio}>
          <img style={styles.profileImage} src={profileUrl} alt={`Profile @${accountId}`}/>
          <span style={styles.profileName}>
            <span style={styles.profileDisplayName}>{displayName}</span>
            <span style={styles.profileAccountId}>{"(@" + accountId + ")"}</span>
          </span>
        </div>
    ) : null;
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
