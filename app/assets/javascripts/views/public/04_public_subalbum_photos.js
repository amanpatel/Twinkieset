TwinkieSetApp.Views.PublicSubalbumPhotos = Backbone.CompositeView.extend({
  template: JST['public/public_subalbum_photos'],

  initialize: function () {
    this.listenTo(this.model.photos(), 'add', this.addPhotoView);
    this.model.photos().each(this.addPhotoView.bind(this));
  },

  addPhotoView: function (photo) {
    var subview = new TwinkieSetApp.Views.PhotoItem({ model: photo });
    this.addSubview('.public-subalbum-photos', subview);
  },

  render: function () {
    var content = this.template({
      subalbum: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    $(window).on('load', function () {

      this.$el.find('.public-subalbum-photos').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
      });
    }.bind(this));

    this.$el.find('.public-subalbum-photos').prepend('<div class="grid-sizer"></div>');

    return this;
  }
});
