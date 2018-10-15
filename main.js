let app = new Vue({

    el: "#app",

    data: {
        show: 'grid',
        apiRequest: new XMLHttpRequest(),
        cats: {}
    },

    computed: {

        showGrid: function () {
            return this.show == 'grid';
        },

        showList: function () {
            return this.show == 'list';
        }

    },

    created: function () {

        // Format a url
        let url = 'https://api.thecatapi.com/v1/images/search?limit=24';

        // Fetch from the url
        this.apiRequest.onload = this.onSuccess;
        this.apiRequest.onerror = this.onError;
        this.apiRequest.open('get', url, true);
        // apiRequest.setRequestHeader('x-api-key', 'your-key-here');
        this.apiRequest.send();

    },

    methods: {

        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        },

        onError: function () {
            console.log("oops!");
        },

        onSuccess: function () {

            if (this.apiRequest.status == "200") {
                this.cats = JSON.parse(this.apiRequest.responseText);
            }
            else {
                this.onError();
            }

        }

    }

});
