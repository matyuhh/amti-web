import React from 'react';
import CV from '../../assets/experience-cv.PNG';

import { 
    ContainerResume,
    ImageResume
} from './resume.styles';

const Resume = () => (
    <>
        <ContainerResume>
            <ImageResume src={CV}/>
        </ContainerResume>
    </>
)

export default Resume;