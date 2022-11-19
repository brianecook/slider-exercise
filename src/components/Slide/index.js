import React from 'react';
import * as S from './style';

function Slide({ title, heading, subhead, media, cta }) {
  return (
    <S.Wrapper>
      <img src={media.desktop} alt="" />
      <S.Content>
        {title &&
          <h2>{title}</h2>
        }
        {heading &&
          <p>{heading}</p>
        }
        {subhead &&
          <p>{subhead}</p>
        }
        {cta.length &&
          <S.Buttons>
            {cta.map(cta => (
              <S.Button href={cta.url}>
                {cta.label}
              </S.Button>
            ))}
          </S.Buttons>
        }
      </S.Content>
    </S.Wrapper>
  )
}

export default Slide