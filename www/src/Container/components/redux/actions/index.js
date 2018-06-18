export const switchPage = (pageName) => ({
  type: 'SWITCH_PAGE',
  payload: {
    pageName: pageName
  }
});

export const triggerRedirection = () => ({
  type: 'TRIGGER_REDIRECTION',
});

export const retrieveContentByPageName = (pageName) => ({
  type: 'RETRIEVE_CONTENT_BY_PAGE_NAME',
  payload: {
    pageName: pageName
  }
});