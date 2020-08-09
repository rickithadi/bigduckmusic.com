import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import Five10 from './preview-templates/Five10';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import GigPostPreview from './preview-templates/GigPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
//CMS.registerPreviewTemplate('gigs', BlogPostPreview);
CMS.registerPreviewTemplate('gigs', GigPostPreview);
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'yt',
  // Visible label
  label: 'Youtube',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return (
      '<iframe class="wrapped-iframe" width="100%" height="500vh" src="https://www.youtube.com/embed/' +
      obj.id +
      '"frameborder="0" allowfullscreen></iframe>'
    );
  },

  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<iframe class="wrapped-iframe" width="100%" height="500vh" src="https://www.youtube.com/embed/' +
      obj.id +
      '"frameborder="0" allowfullscreen></iframe>'
    );
  },
});
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'youtube',
  // Visible label
  label: 'Five Ten',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'id', label: 'Age', widget: 'string'},
    {name: 'pic', label: 'pic', widget: 'image'},
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1],
      pic: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    let num = parseInt(obj.id);
    let uno = num - 1;
    let dos = num - 2;
    let tres = num + 1;
    let quat = num + 2;
    console.log(obj.pic);

    return (
      '<h1 style="color:#18305e;text-align:center">' +
      dos +
      ' ' +
      uno +
      ' <span style="color:#f77805;text-align:center"> ' +
      ' ' +
      obj.id +
      ' ' +
      '</span>' +
      ' ' +
      tres +
      ' ' +
      quat +
      '</h1><img src=' +
      '"' +
      obj.pic +
      '">'
    );
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    let num = parseInt(obj.id);
    let uno = num - 1;
    let dos = num - 2;
    let tres = num + 1;
    let quat = num + 2;
    console.log(quat);

    return (
      '<h1 style="color:grey;text-align:center">' +
      dos +
      ' ' +
      uno +
      ' <span style="color:orange;text-align:center"> ' +
      obj.id +
      '</span>' +
      tres +
      ' ' +
      quat +
      '</h1>'
    );
  },
});
