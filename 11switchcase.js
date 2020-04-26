var memberCard = {
    tier: 'silver'
};

function getTotal(price, card) {
    var discountRate;

    if (card.tier === 'brozone') {
        discountRate = 0.02;
    } else if (card.tier === 'silver') {
        discountRate = 0.05;
    } else if (card.tier === 'gold') {
        discountRate = 0.08;
    } else {
        discountRate = 0.1;
    }

    return price * (1 - discountRate);

}

function getTotalSwitchCase(price, card) {
    var discountRate;

    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.02;
            break;
        case 'gold':
            discountRate = 0.02;
            break;

        default:
            discountRate = 0.1;
            break;
    }
}

var trafficeLight = 'green';

function goOrNotInVietnam(lightValue) {
    switch (lightValue) {
        case 'green':
        case 'orange':
            console.log('go');
            break;

        default:
            console.log('stop');
            break;
    }
}

getTotal(500000, memberCard);


/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

// transform(['A', 'b', 'v', 'B', 'd'])


// [1, 2, 0, 2, 0]

function transform(arr) {
    return arr.map(function (c) {
        switch (c) {
            case 'A':
            case 'a':
                return 1;
                break;
            case 'B':
            case 'b':
                return 2;
                break;
            default:
                return 0;
                break;
        }
    })
}

console.log(transform(['A', 'b', 'v', 'B', 'd']));