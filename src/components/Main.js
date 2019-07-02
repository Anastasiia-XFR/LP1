import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import logo from '../images/logo-w.svg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
    <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

    <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">О Нас</h2>
    <span className="image main"><img src={logo} alt="Fonbet"/></span>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex omnis incidunt necessitatibus nihil quae ad dolorum animi, ab veritatis rem quos reprehenderit itaque modi illo, assumenda, quibusdam facilis placeat error numquam autem maiores esse nulla. Cupiditate, quos, excepturi expedita consectetur, doloribus fugiat amet ad ipsum unde, iusto harum. Vel, ab.
    </p>
    <h3>Преимущества Работы С Нами</h3>
    <p>Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra.</p>
    <ul>
    <li>до 50% Revenue Share</li>
    <li>CPA до 200 USD</li>
    <li>своевременные выплаты</li>
    <li>надежная отчетность</li>
    <li>предоставление postback</li>
    <li>регулярно обновляемые креативы</li>
    <li>адаптированные бренды</li>
    </ul>
    <a type="submit" value="Открыть счёт" className="btn special" href="#">Открыть счёт</a>

    {close}
    </article>

    <article id="bonus" className={`${this.props.article === 'bonus' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Комиссия</h2>
    <h3> Казинo </h3>
    <p>
    Каждый партнер как начинающий, так и опытный может заработать ежемесячный процент комиссии от дохода казино. Партнеры зарабатывают от 35% до 50%. Процент бонуса зависит от количества первых депозитов и рассчитывается по следующей таблице:
    </p>

    <p>
    Процент может обсуждаться в зависимости от количества и качества трафика. <br />

    У нас действует политика «НЕГАТИВНОГО ПЕРЕНОСА» - отрицательный баланс может возникнуть в том случае, если привлечённые Вами игроки выиграют больше, чем проиграют. Это обусловлено тем, что казино делится с партнером не процентом от депозитов, внесенных привлечёнными игроками, а процентом от разницы между депозитами и выигрышами этих игроков. Таким образом, очень удачливые игроки могут опустить баланс партнера ниже нуля. Негативный перенос – это перенос отрицательной суммы на баланс следующего месяца. У нас этого не происходит. На следующий месяц переносятся только положительные суммы меньшие, чем сумма минимальной выплаты, которая в нашей ПП составляет XXX.</p>

    <h3>Букмекера </h3>
    <p>Партнеры зарабатывают от 20% до 45%.</p>
    <p>
    Для Неактивных партнеров снижается ставка по тарифу Revenue Share до 25% от дохода, через 3 месяца с момента присвоения статуса - до 10%. Ежемесячные выплаты партнёру по модели  Revenue Share  не лимитируются, что является идеальной мотивацией для партнеров. Чем дольше Вы работаете с нами и чем больше игроков Вам удается привлечь, тем выше становится Ваш личный доход.
    </p>
    <p>
    Изначально CPA модель сотрудничества не доступна - предлагаем всем партнерам по RevShare модели налить ~30 первых депозитов.
    </p>
    {close}
    </article>

    <article id="faq" className={`${this.props.article === 'faq' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">FAQ</h2>
    <span className="image main"><img src={pic03} alt="" /></span>
    <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
    {close}
    </article>

    <article id="news" className={`${this.props.article === 'news' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Новости</h2>
    <span className="image main"><img src={pic03} alt="" /></span>
    <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
    {close}
    </article>


    <article id="testimonials" className={`${this.props.article === 'testimonials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Отзывы</h2>
    <span className="image main"><img src={pic03} alt="" /></span>
    <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
    {close}
    </article>

    <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Контакты</h2>
    <form method="post" action="#">
    <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
    </div>
    <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="4"></textarea>
    </div>
    <ul className="actions">
    <li><input type="submit" value="Send Message" className="special" /></li>
    <li><input type="reset" value="Reset" /></li>
    </ul>
    </form>
    <ul className="icons">
    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
    <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
    </ul>
    {close}
    </article>

    </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main