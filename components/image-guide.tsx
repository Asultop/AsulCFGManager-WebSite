import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function ImageGuide() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">如何添加截图</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">按照以下步骤将您的软件截图添加到网站</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="fluent-card mb-8">
            <CardHeader>
              <CardTitle>截图要求</CardTitle>
              <CardDescription>为获得最佳显示效果，请遵循以下要求</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">图片格式</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>支持的格式：PNG、JPG、JPEG、WEBP</li>
                  <li>推荐使用 PNG 格式以获得最佳质量</li>
                  <li>最大文件大小：2MB</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">图片尺寸</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>推荐分辨率：1920×1080 或 1280×720</li>
                  <li>保持 16:9 的宽高比以获得最佳显示效果</li>
                  <li>最小宽度：800 像素</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">命名规则</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    使用有意义的文件名，例如 <code>main-interface.png</code>
                  </li>
                  <li>使用连字符（-）分隔单词，不要使用空格</li>
                  <li>文件名只使用小写字母、数字和连字符</li>
                  <li>
                    可以使用数字前缀来控制显示顺序，例如 <code>01-main-screen.png</code>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="fluent-card mb-8">
            <CardHeader>
              <CardTitle>添加截图步骤</CardTitle>
              <CardDescription>按照以下步骤将截图添加到网站</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-medium">创建 screenshots 文件夹</p>
                  <p>
                    在网站的 <code>public</code> 目录下创建一个名为 <code>screenshots</code> 的文件夹。
                  </p>
                </li>
                <li>
                  <p className="font-medium">准备截图文件</p>
                  <p>按照上述要求准备您的截图文件。</p>
                </li>
                <li>
                  <p className="font-medium">添加截图</p>
                  <p>
                    将准备好的截图文件复制到 <code>public/screenshots</code> 文件夹中。
                  </p>
                </li>
                <li>
                  <p className="font-medium">添加元数据（可选）</p>
                  <p>
                    在 <code>public/screenshots</code> 文件夹中创建一个 <code>metadata.json</code>{" "}
                    文件，为每个截图提供标题和描述。
                  </p>
                  <div className="bg-muted p-3 rounded-md mt-2 overflow-x-auto">
                    <pre className="text-sm">
                      {`{
  "screenshots": [
    {
      "filename": "01-main-screen.png",
      "title": "主界面",
      "description": "AsulCFG Manager 的主界面展示"
    },
    {
      "filename": "02-config-editor.png",
      "title": "配置编辑器",
      "description": "强大的配置文件编辑功能"
    }
  ]
}`}
                    </pre>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>提示</AlertTitle>
            <AlertDescription>
              网站会自动检测并显示 <code>public/screenshots</code>{" "}
              文件夹中的所有图片。如果您添加了新的截图，网站将在下次构建或刷新时自动更新。
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}

