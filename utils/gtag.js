import config from "../config/config.yml";

export const GA_TRACKING_ID = config.gaTrackingId;

export const pageview = url => {
  try {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url
    });
  } catch (err) {
    console.log(err);
  }
};

export const event = ({ action, category, label, value }) => {
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value
    });
  } catch (err) {
    console.log(err);
  }
};
