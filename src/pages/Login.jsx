function Login() {
    return ( 
        <div className="bg-footer-texture bg-cover bg-center p-52">
            <div className="flex items-center flex-col w-auto bg-Escuro p-16 ml-40 mr-40 rounded-lg" >
                <div className="p-2.5">
                    <label for="Email" class="block mb-2 text-sm font-medium text-Red-claro ">Email</label>

                    <input type="text" id="Email" class="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-80 p-2.5" placeholder="google@gmail.com" required />

                </div>

                <div className="p-2.5">
                    <label for="Senha" class="block mb-2 text-sm font-medium text-Red-claro">Senha</label>

                    <input type="text" id="Senha" class=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-80 p-2.5 " placeholder="***********" required />

                </div>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-Red-claro bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Entrar</button>

            </div>
    </div>
        
     );
}

export default Login ;