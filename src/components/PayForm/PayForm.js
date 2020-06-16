import React from 'react'

const PayForm = () => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="2XXWW2YHNVVYY" />
      <div className="form-group">
        <input type="hidden" name="on0" value="Tipo" />
          Tipo
          <select className="form-control" name="os0">
          <option value="Original">Original $25,000.00 MXN</option>
          <option value="Print">Print $2,000.00 MXN</option>
        </select>
      </div>
      <input type="hidden" name="currency_code" value="MXN" />
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />
      <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}

export default PayForm;
