import React from 'react';
import { MDCard, MDDivider, MDCardSection } from '../../../../dist/index';

export default { title: 'MDCard' };

export const fullLight = () => {
    return <>
        <MDCard
          media="https://images7.alphacoders.com/909/909467.jpg"
          title="Title goes here"
          subtitle="Secondary text"
          actions={[
            {
              title: 'button',
            },
            {
              title: 'button',
            },
          ]}
          style={{maxWidth: '30%'}}
        >
          <MDCardSection>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </MDCardSection>
          <MDCardSection>
            Tags: <b>#reactjs</b>
          </MDCardSection>
          <MDDivider />
        </MDCard>
    </>;
};

export const fullDark = () => {
    return <>
        <MDCard
          media="https://images7.alphacoders.com/909/909467.jpg"
          title="Title goes here"
          subtitle="Secondary text"
          actions={[
            {
              title: 'button',
            },
            {
              title: 'button',
            },
          ]}
          style={{maxWidth: '30%'}}
          dark
        >
          <MDCardSection>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </MDCardSection>
          <MDCardSection>
            Tags: <b>#reactjs</b>
          </MDCardSection>
          <MDDivider />
        </MDCard>
    </>;
};

export const mediaLight = () => <>
    <MDCard
        media="https://images7.alphacoders.com/909/909467.jpg"
        title="Media Light"
        subtitle="Can you see this picture?"
        style={{maxWidth: '30%'}}
    >
    </MDCard>
</>

export const emptyLight = () => <>
    <MDCard 
        title='This is an empty card.'
        subtitle='This is the subtitle.'
        style={{maxWidth: '30%'}}
    />
</>;

export const emptyDark = () => <>
    <MDCard 
        title='This is an empty card.'
        subtitle='This is the subtitle.'
        style={{maxWidth: '30%'}}
        dark
    />
</>;

export const actionsOnlyLight = () => <>
    <MDCard
          title="Title goes here"
          subtitle="Secondary text"
          accentColor="magenta"
          actions={[{ title: 'button' }]}
          style={{maxWidth: '30%'}}
    />
</>

export const actionsOnlyDark = () => <>
    <MDCard
          title="Title goes here"
          subtitle="Secondary text"
          dark
          accentColor="#f3d5a8"
          actions={[{ title: 'button' }]}
          style={{maxWidth: '30%'}}
    />
</>