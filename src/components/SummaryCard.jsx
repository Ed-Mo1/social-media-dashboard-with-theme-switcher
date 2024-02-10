import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youTubeIcon from "../../images/icon-youtube.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import SummaryCardHeader from "./SummaryCardHeader";
import SummaryCardBody from "./SummaryCardBody";
import SummaryCardFooter from "./SummaryCardFooter";
function SummaryCard({ username, socialMedia, total, today, type }) {
  const icons = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    youtube: youTubeIcon,
  };
  const bgs = {
    facebook: "before:bg-facebook",
    twitter: "before:bg-twitter",
    instagram: "before:bg-instagram",
    youtube: "before:bg-youtube",
  };
  const bg = bgs[socialMedia];
  const icon = icons[socialMedia];

  return (
    <div className={`followrsCard ${bg}`}>
      <SummaryCardHeader icon={icon} username={username} />
      <SummaryCardBody total={total} socialMedia={socialMedia} />
      <SummaryCardFooter type={type} today={today} />
    </div>
  );
}

export default SummaryCard;
