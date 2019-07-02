import React from 'react'
import PropTypes from 'prop-types'

import logoSm from '../images/logo-sm.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <a href="#"><img src={logoSm} alt="Fonbet"/></a>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Fonbet Partners</h1>
                <p style={{maxWidth: `960px`}}>Lorem ipsum dolor sit amet, consectetur adipisicing <a href="https://www.fonbet.com/">Site</a> elit. Tenetur doloribus magnam repellat adipisci sequi eligendi cum voluptatibus voluptate quaerat, commodi obcaecati facere dolorum eveniet voluptatem, unde cumque! </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>О нас</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('bonus')}}>Комиссия</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq')}}>FAQ</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('news')}}>Новости</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('testimonials')}}>Отзывы</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Контакты</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
