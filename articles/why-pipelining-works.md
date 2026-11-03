# Why pipelining works

Pipelining doesn't make a single instruction finish sooner. It lets several instructions be in flight at once, so the processor finishes more of them per second.

## The idea

Split an instruction into stages: fetch, decode, execute, memory, write back. While one instruction is executing, the next is being decoded, and the one after that is being fetched.

With $k$ stages and $n$ instructions, the ideal speedup over a non-pipelined design is:

$$S = \frac{n \cdot k}{k + n - 1}$$

As $n$ grows, $S$ approaches $k$.

## Why it's never quite that good

- **Data hazards** when an instruction needs a result that isn't ready yet
- **Control hazards** after branches
- **Structural hazards** when two instructions need the same hardware

```verilog
// forwarding: use the newest value of rs1
assign alu_a = (ex_mem_rd == id_ex_rs1 && ex_mem_regwrite) ? ex_mem_result : id_ex_rs1_val;
```

Hazards cost stall cycles, and handling them well is a large part of processor design.
