import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Principal {

//    Declarando arrays
    List<Funcionario> listaFuncionarios = new ArrayList<>();
    List<Cliente> listaClientes = new ArrayList<>();
    List<Automovel> listaAutomoveis = new ArrayList<>();



    public void calcularSalarioGenerico(Funcionario f){
        System.out.println(f.calcularSalario());
    }

    public static void main(String args[]){
//        System.out.println("Garagem Tabajara!");

        Funcionario gerente = new Gerente();
        Funcionario badeco = new Badeco();
        Funcionario funcionario = new Funcionario();

        Principal principal = new Principal();

        principal.calcularSalarioGenerico(gerente);
        principal.calcularSalarioGenerico(badeco);
        principal.calcularSalarioGenerico(funcionario);
        principal.menuPrincipal();

    }

    public void menuPrincipal(){



        System.out.println("#Menu Principal");
        System.out.println("01- Funcionário");
        System.out.println("02- Cliente");
        System.out.println("03- Automóvel");
        System.out.println("04- Vendas");
        System.out.println("00- Sair");

        Scanner sc = new Scanner(System.in);
        int op = sc.nextInt();

        switch (op){
            case 1:
                menuFuncionario();
                break;
            case 2:
                menuCliente();
                break;
            case 3:
                menuAutomovel();
                break;
            case 4:
                break;
            case 0: default:
                System.exit(0);
                break;
        }

    }


//    **************************  FUNCIONARIO  *****************************

    public void menuFuncionario() {
        System.out.println("#Menu Funcionario");
        System.out.println("01- Listar");
        System.out.println("02- Cadastrar");
        System.out.println("03- Alterar");
        System.out.println("04- Buscar");
        System.out.println("05- Excluir");
        System.out.println("00- Voltar");

        Scanner sc = new Scanner(System.in);
        int op = sc.nextInt();

        switch (op){
            case 1:
                listarFuncionario();
                break;
            case 2:
                cadastrarFuncionario();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 0: default:
                menuPrincipal();
                break;
        }

        menuFuncionario();

    }

    public void cadastrarFuncionario()  {
        Scanner sc = new Scanner(System.in);
        Funcionario funcionario = new Funcionario();

        System.out.println("# Cadastro de funcionario ");

        System.out.println("> Informe o nome: ");
        funcionario.nome = sc.nextLine();

        System.out.println("> Informe o cpf: ");
        funcionario.cpf = sc.nextLine();

        System.out.println("> Informe o endereço: ");
        funcionario.endereco = sc.nextLine();

        System.out.println("> Informe o telefone: ");
        funcionario.telefone = sc.nextLine();

        try {
            System.out.print("> Informe a data de nascimento: ");
            String data = sc.nextLine();
            Date dt = new SimpleDateFormat("dd/MM/yyyy").parse(data);
            funcionario.dt_nascimento = dt;
        } catch (ParseException e){
            System.out.println(e.getMessage());
        }

        System.out.println("> Informe o codigo: ");
        funcionario.codigo = sc.nextLine();

        System.out.println("> Informe o usuario: ");
        funcionario.usuario = sc.nextLine();

        System.out.println("> Informe a senha: ");
        funcionario.senha = sc.nextLine();

        listaFuncionarios.add(funcionario);
    }

    public void listarFuncionario(){
        System.out.println("#Lista de funcionarios");
        for(Funcionario f:listaFuncionarios){
            System.out.println(f.codigo + " | " + f.nome + " | " + f.cpf + " " + f.usuario) ;
        }
    }

    public void buscarFuncionario(){
        Scanner sc = new Scanner(System.in);
        System.out.println("# Busca de funcionario");
        String busca = sc.nextLine();
        for (Funcionario f : listaFuncionarios){
            if(f.nome.equals(busca)){
                System.out.println("Nome: " + f.nome);
                System.out.println("CPF: " + f.cpf);
            }
        }
    }

    public void excluirFuncionario(){
        Scanner sc = new Scanner(System.in);

        System.out.println("# Exclusão de funcionario");
        String busca = sc.nextLine();

        List<Funcionario> listaParaRemover = new ArrayList<>();

        for (Funcionario f : listaFuncionarios){
            if(f.nome.equals(busca)){
                listaParaRemover.add(f);
            }
        }

        listaFuncionarios.removeAll(listaParaRemover);
    }

//    *********************  CLIENTE  *****************************

    public void menuCliente() {
        System.out.println("#Menu Cliente");
        System.out.println("01- Listar");
        System.out.println("02- Cadastrar");
        System.out.println("03- Alterar");
        System.out.println("04- Buscar");
        System.out.println("05- Excluir");
        System.out.println("00- Voltar");

        Scanner sc = new Scanner(System.in);
        int op = sc.nextInt();

        switch (op){
            case 1:
                listarCliente();
                break;
            case 2:
                cadastrarCliente();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 0: default:
                menuPrincipal();
                break;
        }

        menuCliente();

    }

    public void cadastrarCliente()  {
        Scanner sc = new Scanner(System.in);
        Cliente cliente= new Cliente();

        System.out.println("# Cadastro de Cliente");

        System.out.println("> Informe o nome: ");
        cliente.nome = sc.nextLine();

        System.out.println("> Informe o cpf: ");
        cliente.cpf = sc.nextLine();

        System.out.println("> Informe o endereço: ");
        cliente.endereco = sc.nextLine();

        System.out.println("> Informe o telefone: ");
        cliente.telefone = sc.nextLine();

        try {
            System.out.print("> Informe a data de nascimento: ");
            String data = sc.nextLine();
            Date dt = new SimpleDateFormat("dd/MM/yyyy").parse(data);
            cliente.dt_nascimento = dt;
        } catch (ParseException e){
            System.out.println(e.getMessage());
        }

        System.out.println("> Informe o codigo: ");
        cliente.codigo = sc.nextLine();

        listaClientes.add(cliente);
    }

    public void listarCliente(){
        System.out.println("#Lista de Cliente");
        for(Cliente c:listaClientes){
            System.out.println(c.codigo + " | " + c.nome + " | " + c.cpf) ;
        }
    }

    public void buscarCliente(){
        Scanner sc = new Scanner(System.in);
        System.out.println("# Busca de Cliente");
        String busca = sc.nextLine();
        for (Cliente c : listaClientes){
            if(c.nome.equals(busca)){
                System.out.println("Nome: " + c.nome);
                System.out.println("CPF: " + c.cpf);
            }
        }
    }

    public void excluirCliente(){
        Scanner sc = new Scanner(System.in);

        System.out.println("# Exclusão de Cliente");
        String busca = sc.nextLine();

        List<Cliente> listaParaRemover = new ArrayList<>();

        for (Cliente c : listaClientes){
            if(c.nome.equals(busca)){
                listaParaRemover.add(c);
            }
        }

        listaClientes.removeAll(listaParaRemover);
    }

//  *************************  AUTOMOVEL  ****************************

    public void menuAutomovel() {
        System.out.println("#Menu Automovel");
        System.out.println("01- Listar");
        System.out.println("02- Cadastrar");
        System.out.println("03- Alterar");
        System.out.println("04- Buscar");
        System.out.println("05- Excluir");
        System.out.println("00- Voltar");

        Scanner sc = new Scanner(System.in);
        int op = sc.nextInt();

        switch (op){
            case 1:
                listarAutomovel();
                break;
            case 2:
                cadastrarAutomovel();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 0: default:
                menuPrincipal();
                break;
        }

        menuAutomovel();

    }

    public void cadastrarAutomovel()  {
        Scanner sc = new Scanner(System.in);
        Automovel automovel= new Automovel();

        System.out.println("# Cadastro de Automovel");

        System.out.println("> Informe o nome da marca: ");
        automovel.nomeMarca = sc.nextLine();

        System.out.println("> Informe o nome do modelo: ");
        automovel.nomeModelo= sc.nextLine();

        System.out.println("> Informe o tipo do modelo: ");
        automovel.tipo = sc.nextLine();

        System.out.println("> Informe a cor do automovel: ");
        automovel.cor = sc.nextLine();

        System.out.println("> Informe o número do chassi: ");
        automovel.chassi = sc.nextLine();

        System.out.println("> Informe o número da placa: ");
        automovel.placa = sc.nextLine();

        try {
            System.out.print("> Informe a data de fabricação: ");
            String data = sc.nextLine();
            Date dt = new SimpleDateFormat("dd/MM/yyyy").parse(data);
            automovel.ano_fab = dt;
        } catch (ParseException e){
            System.out.println(e.getMessage());
        }

        System.out.println("> Informe a kilometragem do automovel: ");
        automovel.km = sc.nextFloat();

        try {
            System.out.print("> Informe o ano do modelo: ");
            String data = sc.nextLine();
            Date dt2 = new SimpleDateFormat("dd/MM/yyyy").parse(data);
            automovel.ano_modelo = dt2;
        } catch (ParseException e){
            System.out.println(e.getMessage());
        }

        System.out.println("> Informe o valor do automovel: ");
        automovel.valor = sc.nextFloat();

        listaAutomoveis.add(automovel);
    }

    public void listarAutomovel(){
        System.out.println("#Lista de Automoveis");
        for(Automovel a:listaAutomoveis){
            System.out.println(a.nomeMarca + " | " + a.nomeModelo + " | " + a.cor + " | " + a.ano_fab + " | " + a.ano_modelo) ;
        }
    }

    public void buscarAutomovel(){
        Scanner sc = new Scanner(System.in);
        System.out.println("# Busca de Automoveis");
        String busca = sc.nextLine();
        for (Automovel a : listaAutomoveis){
            if(a.chassi.equals(busca)){
                System.out.println("Nome Marca: " + a.nomeMarca);
                System.out.println("Nome Modelo: " + a.nomeModelo);
            }
        }
    }

    public void excluirAutomovel(){
        Scanner sc = new Scanner(System.in);

        System.out.println("# Exclusão de Automovel");
        String busca = sc.nextLine();

        List<Automovel> listaParaRemover = new ArrayList<>();

        for (Automovel a : listaAutomoveis){
            if(a.chassi.equals(busca)){
                listaParaRemover.add(a);
            }
        }

        listaAutomoveis.removeAll(listaParaRemover);
    }

    //  *************************  VENDAS  ****************************


}
