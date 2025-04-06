// API END Points
import * as constants from '../utils/constants';

export const APIS = {
  CONTACTUS: 'default/contact-us' + ' ' + constants.POST_RAW,
  BLOG_CATEGORY: 'blog/categories' + ' ' + constants.GET_URL_PARAMS,
  BLOG_LIST: 'blog/list' + ' ' + constants.GET_URL_PARAMS,
  BLOG_DETAIL: 'blog/detail' + ' ' + constants.GET_URL_PARAMS,
  CAREER_LIST: 'default/career/list'+ ' '+ constants.GET,
  CAREER_DETAIL: 'default/career/detail' + ' ' + constants.GET_URL_PARAMS,
  JOBAPPLY: 'default/job-inquiry' + ' ' + constants.POST_FORM,
  LIST_FAQS: 'default/faq/list'+ ' ' + constants.GET_URL_PARAMS,
  EBOOK: 'default/ebook' + ' ' + constants.POST_RAW,
  BUDGET_LIST: 'default/solution/list' + ' ' + constants.GET,
  ADD_BUDGET: 'default/budget' + ' ' + constants.POST_RAW,
};
