package N2_26;

import javax.swing.JOptionPane;

public class resposta {
	public static void main(String[] args) {
		
		int vet[]= new int[5];
		int i;
		
		for(i = 0; i < 5; i++) {
			
			vet[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o "+(i+1) +" numero: "));
		}
		
		int maior = vet[0];
		int menor = vet[0];
		
		for(i = 0; i < 5; i++) {

			if(vet[i] > maior) {
				maior = vet[i];
			}
			if(vet[i] < menor) {
				menor = vet[i];
			}
		}
		
		JOptionPane.showMessageDialog(null, maior);
		JOptionPane.showMessageDialog(null, menor);
	}
}
