import React from "react";
import Truncate from "react-truncate";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

export default class TruncatedText extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false,
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded,
    });
  }
  render() {
    const { more, less, lines } = this.props;

    const { expanded, truncated } = this.state;
    return (
      <div className="font-sm">
        <div>
          <Truncate
            lines={!expanded && lines}
            ellipsis={
              <span className="text-primary">
                ...{" "}
                <Link to="#" onClick={this.toggleLines}>
                  {more}
                </Link>
              </span>
            }
            onTruncate={this.handleTruncate}
          >
            <span>
              “woozeee” is a lifestyle platform that combines the power of a
              social media community and an ecommerce marketplace to create an
              experience like no other. Our social media platform offers a
              unique experience to fun loving and business minded individuals
              whilst catering to their daily activities. The service offerings
              available to our community are categorized into the following
              baskets: “Money Matters”; which tend to our users’ financial
              needs, “On the Go”; which tends to our users’ transport needs,
              “Click and Shop”; to satisfy our users’ retail needs. woozeee also
              offers unique features such as “Click and Play” for our
              thrill-seeking users who love sports, games and staking money.
              Additionally, other useful and beneficial features provided on the
              woozeee e-commerce platform include “Ask a Doc” which gives users’
              quick access to the nearest medical professional services, “Ask a
              Lawyer” which gives users access to the nearest lawyers available
              and much more. All these are available at your fingertips. We
              offer rewards to our customers and also ensure that they always
              get the best value using our three channels (e-commerce, mobile
              and kiosks). Our rewards include, discounted rates for certain
              products or outlets, flexible payment and more. The woozeee app
              provides a bouquet of secure and convenient payment options for
              all transactions made on our platform such as payments by debit
              card, bank transfers, POS and a wallet system. Come on board the
              platform of the future. We are about the Power of the 3 Es;
              Entertainment, Elegance and Excellence. It is Eazeee with woozeee.
            </span>
          </Truncate>
          {!truncated && expanded && (
            <div className="text-primary pt-2 font-weight-500">
              {" "}
              <Link to="#" onClick={this.toggleLines}>
                {less}<ExpandLessRoundedIcon/>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}


TruncatedText.defaultProps = {
  lines: 7,
  more: (
    <div className="pt-2 font-weight-500">
      <span>Show more <ExpandMoreRoundedIcon/></span>
    </div>
  ),
  less: "Show less",
};

TruncatedText.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
};

