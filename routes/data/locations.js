/**
 * GET /ZAutomation/api/v1/locations HTTP/1.1
 *
 * {
    "type": "object",
    "required": true,
    "properties": {
        "error": {
            "type": ["string", "null"],
            "required": true
        },
        "data"
            "type": "array",
            "required": true
        },
        "code": {
            "type": ["integer", "null"],
            "required": true
        },
        "message": {
            "type": ["string", "null"],
            "required": true
        },
    }
 }
 */
exports.locations = {
    data: [{
        id: 1,
        title: "Bureau",
        user_img: "",
        default_img: "living_room.jpg",
        img_type: "default"
    }, {
        id: 2,
        title: "Hall",
        user_img: "",
        default_img: "hall.jpg",
        img_type: "default"
    }, {
        id: 3,
        title: "Cuisine",
        user_img: "",
        default_img: "kitchen.jpg",
        img_type: "default"
    }, {
        id: 4,
        title: "Salon",
        user_img: "",
        default_img: "livingroom.jpg",
        img_type: "default"
    }, {
        id: 5,
        title: "WC",
        user_img: "",
        default_img: "wc.jpg",
        img_type: "default"
    }, {
        id: 6,
        title: "Salle de bain",
        user_img: "",
        default_img: "bathroom.jpg",
        img_type: "default"
    }, {
        id: 7,
        title: "Chambre 1",
        user_img: "",
        default_img: "bedroom.jpg",
        img_type: "default"
    }],
    code: 200,
    message: "200 OK",
    error: null
};

exports.locations1 = {
    data: {
        id: 1,
        title: "Bureau",
        user_img: "",
        default_img: "living_room.jpg",
        img_type: "default"
    },
    code: 200,
    message: "200 OK",
    error: null
};