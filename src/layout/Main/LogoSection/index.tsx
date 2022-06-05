import { Link } from 'react-router-dom';

// MUI imports
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from "assets/logo.png";

// ==============================|| MAIN LOGO ||============================== //

export interface Dimensions {
    height?: string;
    width?: string;
  }

const LogoSection = ({ height, width }: Dimensions) => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={Logo} alt="logo" height={height ? height : "40px"} width={width ? width : "40px"} />
    </ButtonBase>
)

export default LogoSection;