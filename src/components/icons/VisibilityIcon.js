import React from 'react';

function VisibilityIcon({ isVisible }) {
  return (
    <>
      {isVisible ? (
        <svg
          id="visible"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          style={{ height: '100%', width: '100%', maxHeight: 'inherit' }}
        >
          <defs>
            <clipPath id="clip-path-visible-icon">
              <path
                id="Path_36"
                data-name="Path 36"
                d="M1387.5-767a37.5,37.5,0,0,0,37.5-37.5,37.5,37.5,0,0,0-37.5-37.5,37.5,37.5,0,0,0-37.5,37.5A37.5,37.5,0,0,0,1387.5-767Z"
                transform="translate(-1350 842)"
                fill="none"
                clip-rule="evenodd"
              />
            </clipPath>
          </defs>
          <g id="Background" clip-path="url(#clip-path-visible-icon)">
            <path
              id="Path_35"
              data-name="Path 35"
              d="M1345-847h78.012v78.012H1345Z"
              transform="translate(-1346.506 845.494)"
              fill="none"
            />
          </g>
          <g id="Icon" transform="translate(13 -140.525)">
            <path
              id="Path_140"
              data-name="Path 140"
              d="M25,161.525A27.45,27.45,0,0,0,.1,177.408a1.072,1.072,0,0,0,0,.907,27.459,27.459,0,0,0,49.8,0,1.072,1.072,0,0,0,0-.907A27.45,27.45,0,0,0,25,161.525Zm0,27.608a11.27,11.27,0,1,1,11.27-11.27A11.269,11.269,0,0,1,25,189.133Z"
              fill="#4235da"
            />
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="7.215"
              cy="7.215"
              r="7.215"
              transform="translate(17.785 170.644)"
              fill="#4235da"
            />
          </g>
        </svg>
      ) : (
        <svg
          id="invisible"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <defs>
            <clipPath id="clip-path-invisible-icon">
              <path
                id="Path_36"
                data-name="Path 36"
                d="M1387.5-767a37.5,37.5,0,0,0,37.5-37.5,37.5,37.5,0,0,0-37.5-37.5,37.5,37.5,0,0,0-37.5,37.5A37.5,37.5,0,0,0,1387.5-767Z"
                transform="translate(-1350 842)"
                fill="#f2f2f2"
                clip-rule="evenodd"
              />
            </clipPath>
          </defs>
          <g id="Background" clip-path="url(#clip-path-invisible-icon)">
            <path
              id="Path_35"
              data-name="Path 35"
              d="M1345-847h78.012v78.012H1345Z"
              transform="translate(-1346.506 845.494)"
              fill="#f2f2f2"
            />
          </g>
          <g id="Icon" transform="translate(13 18)">
            <path
              id="Path_135"
              data-name="Path 135"
              d="M7.853,188.232l6.529-6.529a11.278,11.278,0,0,1,14.409-14.409l4.458-4.458A27.487,27.487,0,0,0,.1,177.46a1.072,1.072,0,0,0,0,.907A27.572,27.572,0,0,0,7.853,188.232Z"
              transform="translate(-0.001 -158.33)"
              fill="#fff"
            />
            <path
              id="Path_136"
              data-name="Path 136"
              d="M337.671,273.675l-6.529,6.529a11.278,11.278,0,0,1-14.409,14.409l-4.458,4.458a27.487,27.487,0,0,0,33.147-14.624,1.071,1.071,0,0,0,0-.907A27.572,27.572,0,0,0,337.671,273.675Z"
              transform="translate(-295.523 -264.416)"
              fill="#fff"
            />
            <path
              id="Path_137"
              data-name="Path 137"
              d="M459.451,466.666a7.214,7.214,0,0,0,7.215-7.215c0-.123-.005-.252-.011-.376l-7.58,7.58C459.2,466.66,459.322,466.666,459.451,466.666Z"
              transform="translate(-434.448 -439.87)"
              fill="#fff"
            />
            <path
              id="Path_138"
              data-name="Path 138"
              d="M338.79,331.675a7.214,7.214,0,0,0-7.215,7.215c0,.123.005.252.011.375l7.58-7.58C339.037,331.675,338.914,331.675,338.79,331.675Z"
              transform="translate(-313.788 -319.304)"
              fill="#fff"
            />
            <path
              id="Path_139"
              data-name="Path 139"
              d="M105.225,132.264l-3.39,3.39a2.684,2.684,0,0,0,3.8,3.793l4.528-4.528,4.624-4.624,3.01-3.01,9.474-9.474,3.009-3.01,5.762-5.761,3.39-3.39a2.684,2.684,0,0,0-3.8-3.793l-4.528,4.528-4.624,4.624-3.01,3.01L114,123.493l-3.01,3.01Z"
              transform="translate(-95.629 -101.075)"
              fill="#fff"
            />
          </g>
        </svg>
      )}
    </>
  );
}

export default VisibilityIcon;
