import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import useStyles from './useStyles';

const TermsOfService = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">
          Website Terms and Conditions of Use
        </Typography>

        <Typography variant="h5">1. Terms</Typography>

        <Typography variant="body1">
          By accessing this Website, accessible from https://www.jobsalrt.com/,
          you are agreeing to be bound by these Website Terms and Conditions of
          Use and agree that you are responsible for the agreement with any
          applicable local laws. If you disagree with any of these terms, you
          are prohibited from accessing this site. The materials contained in
          this Website are protected by copyright and trade mark law.
        </Typography>

        <Typography variant="h5">2. Use License</Typography>

        <Typography variant="body1">
          Permission is granted to temporarily download one copy of the
          materials on Jobs Alrt's Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </Typography>

        <ul>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on Jobs Alrt's
            Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or "mirror" the
            materials on any other server.
          </li>
        </ul>

        <Typography variant="body1">
          This will let Jobs Alrt to terminate upon violations of any of these
          restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether it is printed or electronic format.
        </Typography>

        <Typography variant="h5">3. Disclaimer</Typography>

        <Typography variant="body1">
          All the materials on Jobs Alrt’s Website are provided "as is". Jobs
          Alrt makes no warranties, may it be expressed or implied, therefore
          negates all other warranties. Furthermore, Jobs Alrt does not make any
          representations concerning the accuracy or reliability of the use of
          the materials on its Website or otherwise relating to such materials
          or any sites linked to this Website.
        </Typography>

        <Typography variant="h5">4. Limitations</Typography>

        <Typography variant="body1">
          Jobs Alrt or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on Jobs Alrt’s Website, even if Jobs Alrt or an authorize
          representative of this Website has been notified, orally or written,
          of the possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </Typography>

        <Typography variant="h5">5. Revisions and Errata</Typography>

        <Typography variant="body1">
          The materials appearing on Jobs Alrt’s Website may include technical,
          typographical, or photographic errors. Jobs Alrt will not promise that
          any of the materials in this Website are accurate, complete, or
          current. Jobs Alrt may change the materials contained on its Website
          at any time without notice. Jobs Alrt does not make any commitment to
          update the materials.
        </Typography>

        <Typography variant="h5">6. Links</Typography>

        <Typography variant="body1">
          Jobs Alrt has not reviewed all of the sites linked to its Website and
          is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by Jobs Alrt of the
          site. The use of any linked website is at the user’s own risk.
        </Typography>

        <Typography variant="h5">7. Site Terms of Use Modifications</Typography>

        <Typography variant="body1">
          Jobs Alrt may revise these Terms of Use for its Website at any time
          without prior notice. By using this Website, you are agreeing to be
          bound by the current version of these Terms and Conditions of Use.
        </Typography>

        <Typography variant="h5">8. Your Privacy</Typography>

        <Typography variant="body1">Please read our Privacy Policy.</Typography>

        <Typography variant="h5">9. Governing Law</Typography>

        <Typography variant="body1">
          Any claim related to Jobs Alrt's Website shall be governed by the laws
          of in without regards to its conflict of law provisions.
        </Typography>
      </Paper>
    </div>
  );
};

export default TermsOfService;
