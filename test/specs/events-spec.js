/*global describe, beforeEach, it, expect, xit*/
(function () {
    'use strict';

    describe('events', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            github.authenticate({
                type: 'oauth',
                token: token
            });
        });




    });
}());
