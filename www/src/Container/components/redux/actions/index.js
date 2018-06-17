export const switchPage = (pageName) => ({
  type: 'SWITCH_PAGE',
  pageName: pageName
});

export const triggerRedirection = () => ({
  type: 'TRIGGER_REDIRECTION'
});