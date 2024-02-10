import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youTubeIcon from "../../images/icon-youtube.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import OverviewCardHeader from "./OverviewCardHeader";
import OverviewCardBody from "./OverviewCardBody";
function OverviewCard({ desc, socialMedia, total, today, type }) {
  const icons = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    youtube: youTubeIcon,
  };
  const icon = icons[socialMedia];
  return (
    <div className="interactivity-card">
      <OverviewCardHeader desc={desc} icon={icon} />
      <OverviewCardBody today={today} type={type} total={total} />
    </div>
  );
}

export default OverviewCard;
