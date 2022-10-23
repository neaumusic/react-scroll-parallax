import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';

const RedRow = styled.hr`
  border: 0;
  height: 1px;
  background-color: red;
  position: relative;
  width: 100%;
  z-index: 99999;
`;
const TealRow = styled.hr`
  border: 0;
  height: 1px;
  background-color: #3cf;
  position: fixed;
  width: 100%;
  z-index: 99999;
`;
const BlankPage = styled.div`
  height: 150vh;
  width: 100vw;
`;
const vhMarkers = new Array(9).fill(0).map((v, i) => (i + 1) * 10);

export const BreakPoints: React.FC = () => {
  return (
    <div>
      <RedRow />
      {vhMarkers.map((vhScalar) => (
        <TealRow style={{ top: `${vhScalar}vh` }} />
      ))}
      <BlankPage />
      <RedRow color="red" />
    </div>
  );
};
