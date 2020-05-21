import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import Five10 from './preview-templates/Five10';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import GigPostPreview from './preview-templates/GigPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
//CMS.registerPreviewTemplate('gigs', BlogPostPreview);
CMS.registerPreviewTemplate('gigs', GigPostPreview);
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'youtube',
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
    return '<h1 style="color:red;text-align:center">' + obj.id + '</h1>';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return '<h1 style="color:red">' + obj.id + '</h1>';
  },
});
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'fiveten',
  // Visible label
  label: 'five ten things',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'id', label: 'album link', widget: 'string'},
    {name: 'label', label: 'label', widget: 'string'},
    {name: 'link', label: 'album image', widget: 'image'},
    {name: 'year', label: 'year', widget: 'string'},
  ],
  // Pattern to identify a block as being an instance of this component
  // Function to extract data elements from the regexp match
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    Five10(obj.label, obj.link, obj.year);
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    Five10(obj.label, obj.link, obj.year);
  },
});
