package org.jncc.cause;

public class ResultCause {
	public String getResultCode() {
		return resultCode;
	}

	public void setCause(String resultCode,String resultDesc){
		setResultCode(resultCode);
		setResultDesc(resultDesc);
	}
	
	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}


	public String getResultDesc() {
		return resultDesc;
	}


	public void setResultDesc(String resultDesc) {
		this.resultDesc = resultDesc;
	}


	private String resultCode;
	private String resultDesc;
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
