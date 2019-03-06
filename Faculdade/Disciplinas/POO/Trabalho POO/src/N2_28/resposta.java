package N2_28;

import javax.swing.JOptionPane;

public class resposta {
	
	public static void main(String[] args) {
		
		int n1 = Integer.parseInt(JOptionPane.showInputDialog("Digita um numero: "));
		int n2 = Integer.parseInt(JOptionPane.showInputDialog("Digita um numero: "));
 
		
		System.out.println(n1 % n2 == 0 ? "Os numeros sao multiplos" : "Os numeros não são multiplos");
	}
}
