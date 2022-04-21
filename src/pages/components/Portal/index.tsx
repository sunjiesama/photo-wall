import React from 'react';

interface PortalProps {
  visible: boolean;
  closePortal: Function;
  url: string;
}

export default (props: PortalProps): React.ReactElement => {
  const { visible, url, closePortal } = props;

  return (
    <>
      {visible && (
        <div
          className="absolute top-0 flex items-center justify-center w-full h-full bg-black"
          onClick={() => {
            closePortal();
          }}
        >
          <img className="object-cover w-full h-auto" src={url} alt="" />
        </div>
      )}
    </>
  );
};
