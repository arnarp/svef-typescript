import * as React from 'react';

export default (props: {appVersion: string}) => {
  return (
    <div>
      Footer
      v. {props.appVersion}
    </div>
  );
};
