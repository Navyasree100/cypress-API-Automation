LicenseUpdateV1
import videoPackFunc from '../cypress/support/global/api/videoPackFunc.js'

import videoPackFunc from '../cypress/support/global/api/videoPackFunc.js'
staging

describe('Order Processing',function()
{
    it('Video Pack - EN - GBP', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("gbp","en",done);
    })

    it('Video Pack - DE - GBP', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("gbp","de",done);
    })

    it('Video Pack - ES - GBP', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("gbp","es",done);
    })

    it('Video Pack - FR - GBP', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("gbp","fr",done);
    })

    it('Video Pack - IT - GBP', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("gbp","it",done);
    })

    it('Video Pack - EN - USD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("usd","en",done);
    })

    it('Video Pack - DE - USD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("usd","de",done);
    })

    it('Video Pack - ES - USD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("usd","es",done);
    })

    it('Video Pack - FR - USD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("usd","fr",done);
    })

    it('Video Pack - IT - USD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("usd","it",done);
    })

    it('Video Pack - EN - EUR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("eur","en",done);
    })

    it('Video Pack - DE - EUR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("eur","de",done);
    })

    it('Video Pack - ES - EUR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("eur","es",done);
    })

    it('Video Pack - FR - EUR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("eur","fr",done);
    })

    it('Video Pack - IT - EUR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("eur","it",done);
    })

    it('Video Pack - EN - CAD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("cad","en",done);
    })

    it('Video Pack - DE - CAD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("cad","de",done);
    })

    it('Video Pack - ES - CAD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("cad","es",done);
    })

    it('Video Pack - FR - CAD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("cad","fr",done);
    })

    it('Video Pack - IT - CAD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("cad","it",done);
    })

    it('Video Pack - EN - AUD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("aud","en",done);
    })

    it('Video Pack - DE - AUD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("aud","de",done);
    })

    it('Video Pack - ES - AUD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("aud","es",done);
    })

    it('Video Pack - FR - AUD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("aud","fr",done);
    })

    it('Video Pack - IT - AUD', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("aud","it",done);
    })

    it('Video Pack - EN - INR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("inr","en",done);
    })

    it('Video Pack - DE - INR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("inr","de",done);
    })

    it('Video Pack - ES - INR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("inr","es",done);
    })

    it('Video Pack - FR - INR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("inr","fr",done);
    })

    it('Video Pack - IT - INR', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacks("inr","it",done);
    })

    it('Video Pack - Fail', (done) => {
        const vpc = new videoPackFunc();
        vpc.GetStandardPacksFail("gb","gb",done);
    })
})