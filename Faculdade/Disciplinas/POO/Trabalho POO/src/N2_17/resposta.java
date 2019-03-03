package N2_17;

import javax.swing.JOptionPane;

public class resposta {
	public static void main(String[] args) {
		
  		int n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro Valor:"));
  		int n2 = Integer.parseInt(JOptionPane.showInputDialog("DIgite o segundo Valor:"));
  		
  		
  		if(n1 > n2) {
  			System.out.println(n1+" is larger");
  		}
  		else if(n2 > n1) {
  			System.out.println(n2+" is larger");
  		}
  		else {
  			System.out.println("These numbers are equal");
  		}
	}
}
