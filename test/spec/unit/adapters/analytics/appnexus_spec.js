import appnexusAnalytics from 'src/adapters/analytics/appnexus';
import { assert } from 'chai';

describe('Unit: AppNexus Prebid Analytics Adapter', () => {
  it('should exist', () => {
    assert.ok(appnexusAnalytics, 'an AppNexus Prebid Analytics adapter is found ');
  });
});
