const Contact = ()=>
{
    return(
        <section className="section-contact">
            <div className="container">
                <h1 className="container-title">Contact</h1>
                <hr />
                <div className="contact-wrapper">
                    <form>
                        <input type="text" name="name" placeholder="your name" />
                        <input type="email" name="email" placeholder="your email" />
                        <textarea name="message" rows="6" placeholder="your message" />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )

}
export default Contact
