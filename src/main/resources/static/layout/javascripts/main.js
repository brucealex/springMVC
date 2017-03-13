/**
 * Created by bruno on 13/03/17.
 */
$(function () {
    var decimal = $('.js-decimal');
    decimal.maskMoney();

    var plain = $('.js-plain');
    plain.maskMoney({precision:0});
});
