import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Download, Share2 } from "lucide-react"

interface CertificateCardProps {
  certificate: {
    id: number
    title: string
    issueDate: string
    instructor: string
    image: string
  }
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{certificate.title}</h3>
            <p className="text-sm text-muted-foreground">Instructor: {certificate.instructor}</p>
          </div>
        </div>
        <div className="relative mb-4 border rounded-md overflow-hidden">
          <Image
            src={certificate.image || "/placeholder.svg"}
            alt={certificate.title}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">Issued on {certificate.issueDate}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
