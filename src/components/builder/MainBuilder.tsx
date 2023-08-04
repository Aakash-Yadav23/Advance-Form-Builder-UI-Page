import React from 'react'
import Objective from './Objective'
import StarRating from './StarRating'
import SearchComponents from './SearchComponents'
import TextForm from './TextForm'
import YesOrNO from './YesOrNO'
import SectionBreak from './SectionBreak'
import DateTime from './DateTime'
import OpenQuestion from './OpenQuestion'

const MainBuilder = () => {
    return (
        <div>
            <OpenQuestion/>
            <Objective/>
            <StarRating/>
            <TextForm/>
            <YesOrNO/>
            <SectionBreak/>
            <DateTime/>
        </div>
    )
}

export default MainBuilder
