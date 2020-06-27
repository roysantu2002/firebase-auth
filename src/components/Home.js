import React, { Component } from 'react';
import AppHero from '../views/AppHero'
import AppValues from '../views/AppValues'
import Courses from '../views/CourseCategories'
import Process from '../views/CourseProcess'
import AppCTA from '../views/AppCTA' 
import GetHelp from '../views/GetHelp'

function Home () {
    
        return (
            <React.Fragment>
            <AppHero/>
            <AppValues/>
            <Courses/>
            <Process/>
            <AppCTA/>
            <GetHelp/>
            </React.Fragment>
        )
}
export default Home;