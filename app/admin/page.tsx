"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

interface Payment {
  id: number
  name: string
  email: string
  plan: string
}

const dummyData: Payment[] = [
  { id: 1, name: "Rama", email: "rama@gmail.com", plan: "Ultra HD" },
  { id: 2, name: "Dani", email: "dani@gmail.com", plan: "HD" },
]

export default function AdminPage() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState<Payment[]>([])
  const [editing, setEditing] = useState<Payment | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setData(dummyData)
  }, [])

  const handleDelete = (id: number) => {
    if (confirm("Yakin mau hapus data ini?")) {
      setData((prev) => prev.filter((item) => item.id !== id))
    }
  }

  const handleEdit = (item: Payment) => {
    setEditing(item)
    setOpen(true)
  }

  const handleSave = () => {
    if (editing) {
      setData((prev) =>
        prev.map((x) => (x.id === editing.id ? editing : x))
      )
    }
    setOpen(false)
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Ultra HD":
        return "bg-yellow-100 text-yellow-700"
      case "HD":
        return "bg-blue-100 text-blue-700"
      case "REGULAR":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-neutral-800">Manajemen Pembayaran</h1>

      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Input
              placeholder="Cari nama atau email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-1/3 rounded-xl"
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Langganan</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getPlanColor(item.plan)}`}>
                      {item.plan}
                    </span>
                  </TableCell>
                  <TableCell className="space-x-2 text-center">
                    <Button size="sm" onClick={() => handleEdit(item)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1 text-xs">
                      ✏️ Edit
                    </Button>
                    <Button size="sm" onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1 text-xs">
                      🗑️ Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Edit Data</DialogTitle>
          </DialogHeader>

          {editing && (
            <div className="space-y-4 pt-4">
              <div>
                <Label className="mb-1 block text-sm font-medium">Nama</Label>
                <Input
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label className="mb-1 block text-sm font-medium">Langganan</Label>
                <Select
                  value={editing.plan}
                  onValueChange={(value) => setEditing({ ...editing, plan: value })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Pilih Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ultra HD">Ultra HD</SelectItem>
                    <SelectItem value="HD">HD</SelectItem>
                    <SelectItem value="REGULAR">REGULAR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2 pt-6">
                <DialogClose asChild>
                  <Button variant="outline" className="rounded-xl">Batal</Button>
                </DialogClose>
                <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white rounded-xl">
                  Simpan
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
