MVC模式将程序分为三个部分: 模型(Model),试图(View), 控制器(Controller)
Model模型层: 业务数据的处理和存储,数据更新后更新
View视图层: 一般为展示给用户的界面
Controller控制器: 负责连接Model层和View层,接受并处理View层触发的事件,并在Model
层的数据状态变动时更新View层


MVP模式将程序分为三个部分: 模型(Model),视图(View),管理层(Presenter)
Model模型层: 只负责存储数据,与View呈现无关,也与UI处理逻辑无关,发生更新也不用主动
通知View
View层: 一般为展示给用户的界面
Presenter管理层: 负责连接Model层和View层,处理View层的事件,负责获取数据并将获取
的数据经过处理后更新View

MVVM