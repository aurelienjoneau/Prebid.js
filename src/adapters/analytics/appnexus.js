import { ajax } from 'src/ajax';

/**
 * AppNexus Prebid Analytics - analytics adapter for AppNexus Analytics Endpoint
 */

import adapter from 'AnalyticsAdapter';
const utils = require('../../utils');

const url = 'https://httpbin.org/post';
const analyticsType = 'endpoint';

export default utils.extend(adapter(
  {
    url,
    analyticsType
  }
),
  {
  // Override AnalyticsAdapter functions by supplying custom methods
  track({ eventType, args }) {
    console.log('`track` function override for AppNexus Prebid Analytics');

    //ajax(url, (result) => console.log('Analytics Endpoint Example2: result = ' + result), JSON.stringify({ eventType, args }));
  },

  enqueue({ eventType, args }) {
    console.log('`enqueue` function override for AppNexus Prebid Analytics');
    // update BidEvent object in queue
  }
});

/**
 *  log schema / BidEvent object
 *  {
    id: ???,
    ip: "%%IP%%",
    user_agent: "%%USER_AGENT%%",
    configured_timeout_ms: Int,
    referer_url: String,
    member_id: Int,
    ad_units: [{
        ad_unit_code: String,
        bids: [{
            id: ???,
            price: Float,
            bidder_code: String,
            bidder_ad_unit_id: String,
            request_timestamp: Timestamp,
            response_timestamp: Timestamp,
            status_code: Int,
            creative: {
                id: String,
                width: Int,
                height: Int,
                brand: String
            }
        }]
    }]
}
 */
