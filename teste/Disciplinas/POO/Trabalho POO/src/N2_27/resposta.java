package N2_27;

import javax.swing.JOptionPane;

public class resposta {
	
	public static void main(String[] args) {
		
		int n1 = Integer.parseInt(JOptionPane.showInputDialog("Digita um numero: "));
		
		System.out.println(n1 % 2 == 0 ? "O numero e par" : "O numero e impar");
	}
}
