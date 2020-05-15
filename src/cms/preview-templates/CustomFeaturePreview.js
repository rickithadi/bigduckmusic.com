import React from 'react';

export const CustomFeaturePreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}
