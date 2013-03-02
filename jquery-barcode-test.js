if (Meteor.isClient) {
  Template.on_rendered.rendered = function(){
    $('#bc').barcode('1234567890', "code128",{barWidth:2, barHeight:30});
    $('#bc' +  this.find('#barcode_id').innerText).barcode(this.find('#barcode_id').innerText, "code128",{barWidth:2, barHeight:30});
  };

  Template.on_event.events({
    'keyup #keyup_barcode_id': function(event, template){
      $('#key_up_barcode').barcode(template.find("#keyup_barcode_id").value, "code128",{barWidth:2, barHeight:30});
    },
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
