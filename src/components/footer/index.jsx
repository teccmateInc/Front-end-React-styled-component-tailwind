import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, Horizontal, Social, Group, Text } from './styles/footer'

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;

}

Footer.Wrapper = function FooterWrapper({children, ...props}) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...props}) {
   return <Row {...props}>{children}</Row>;
}


Footer.Column = function FooterColumn({children, ...props}) {
  return <Column {...props}>{children}</Column>;
}

Footer.Link = function FooterLink({children, ...props}) {
  return <Link {...props}>{children}</Link>;
}

Footer.Title = function FooterTitle({children, ...props}) {
  return <Title {...props}>{children}</Title>;
}

Footer.Horizontal = function FooterHorizontal({children, ...props}) {
  return <Horizontal {...props}>{children}</Horizontal>;
}

Footer.Social = function FooterSocial({children, ...props}) {
  return <Social {...props}>{children}</Social>;
}

Footer.Group = function FooterGroup({children, ...props}) {
  return <Group {...props}> {children} </Group>;
}

Footer.Text = function FooterText({children, ...props}) {
  return <Text {...props}>{children}</Text>
}