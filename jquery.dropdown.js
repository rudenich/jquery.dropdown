(function($){
    var Dropdown = function(obj){
        this.obj = obj
        this.init();
    }

    var prototype = {
        show:function(){
            this.place();
            console.log(this.trigger.text());
            this.title.text(this.trigger.text());
            this.container
                .show()
            ;

            this.container.addClass('is-active');
        },
        hide:function(){
            this.container.hide();
            this.container.removeClass('is-active');
        },
        select:function(elem){
            this.trigger.text(elem.text());
            this.hide();
        },
        place:function(){

        },
        init:function(){
            this.trigger = this.obj.find('.b-dropdown__trigger');
            this.list = this.obj.find('.b-dropdown__list');
            this.container = this.obj.find('.b-dropdown__container');
            this.title = this.obj.find('.b-dropdown__title');
            this.trigger.on('click', $.proxy(function(e){
                e.preventDefault();
                this.show();
            },this));
            $(document).on('click',':not(.b-dropdown)', $.proxy(function(e){


                if (!this.obj.is(e.target) && this.obj.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    this.hide();
                }
            },this));
            this.list.find('a').on('click', $.proxy(function(e){
                e.preventDefault();
                this.select($(e.currentTarget));
            },this));
        }
    }

    Dropdown.prototype = prototype;




    $.fn.dropdown = function(){
        this.each(function(){
            var obj = new Dropdown($(this));
            $(this).data('dropdown',obj);
        });

    }
})(jQuery);