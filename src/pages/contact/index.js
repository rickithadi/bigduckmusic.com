import React from 'react';
import {navigate} from 'gatsby-link';
import Layout from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isValidated: false};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div class="columns " style={{minHeight: '100%', paddingBottom: '10vh'}}>
        <div class="column is-3 is-offset-1">
          <h3 className="topkek cen" style={{padding: '10px'}}>
            TALK TO US
          </h3>
        </div>
        <div class="column is-7 ">
          <p className="biker" style={{padding:'10px'}}>
            For any music submissions or collaboration queries, or just to say
            hi, please fill out the contact tab below. Big Duck is a passion
            project - much like many of the projects in our scene, and we’d love
            to continue to bring you great experiences as long as we can. If
            you’d like to donate money to help keep us afloat, email
            naybeatsfestival@gmail.com!
          </p>

          <div class="column is-8">
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}>
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div class="columns " style={{minHeight: '100%'}}>
                <div class="column " style={{minHeight: '100%'}}>
                  <div className="field">
                    <label className="gay" htmlFor={'name'}>
                      YOUR NAME{' '}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        placeholder="NAME"
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
                <div class="column " style={{minHeight: '100%'}}>
                  <div className="field">
                    <label className="gay" htmlFor={'email'}>
                      YOUR EMAIL{' '}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        placeholder="EMAIL"
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="gay" htmlFor={'message'}>
                  YOUR MESSAGE{' '}
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="COLLABE PLS"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <button
                  className="button is-link cen biker"
                  type="submit"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                  }}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
