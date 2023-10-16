import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  const [gitBouncing, setGitBouncing] = useState(false);
  const [linkedBouncing, setLinkedBouncing] = useState(false);

  const handleGitEnter = () => {
    setGitBouncing(true);
    console.log('entered');
  }

  const handleGitLeave = () => {
    setGitBouncing(false);
    console.log('left');
  }

  const handleGitClick = () => {
    const gitSite = 'https://github.com/tylertowery/total-party-wipeboard';

    window.open(gitSite, '_blank')
  }

  const handleLinkedEnter = () => {
    setLinkedBouncing(true);
    console.log('entered');
  }

  const handleLinkedLeave = () => {
    setLinkedBouncing(false);
    console.log('left');
  }

  const handleLinkedClick = () => {
    const gitSite = 'https://www.linkedin.com/in/tylertowery/';

    window.open(gitSite, '_blank')
  }

  return (
    <>
      <div className='footer'>
        <div>Logo</div>
        <h2>Tracking D&D Parties for Busy DM's</h2>
        <div>
          <h4>Connect</h4>
          <div>
            {gitBouncing ?
              <FontAwesomeIcon
                className='icon'
                size='xl'
                onClick={handleGitClick}
                onMouseLeave={handleGitLeave}
                bounce
                icon={faGithub}
              />
              :
              <FontAwesomeIcon
                className='icon'
                size='xl'
                onMouseEnter={handleGitEnter}
                icon={faGithub}
              />
            }
            {linkedBouncing ?
              <FontAwesomeIcon
                className='icon'
                size='xl'
                bounce
                onClick={handleLinkedClick}
                onMouseLeave={handleLinkedLeave}
                icon={faLinkedin}
              />
              :
              <FontAwesomeIcon
                className='icon'
                size='xl'
                onMouseEnter={handleLinkedEnter}
                icon={faLinkedin}
              />}
          </div>
        </div>
      </div>
    </>
  )
}